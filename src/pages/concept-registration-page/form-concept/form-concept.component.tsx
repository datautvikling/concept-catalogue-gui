import _ from 'lodash';
import { withFormik } from 'formik';
import { FormConceptPure } from './form-concept-pure.component';
import { schema } from './form-concept.schema';
import { Concept } from '../../../domain/Concept';
import { validateConceptForm } from '../../../lib/validateConceptForm';
import { patchConceptFromForm } from '../../../lib/patchConceptForm';

interface FormProps {
  concept: Concept;
  dispatch: Function;
  lastPatchedResponse?: object;
}

type FormValues = Pick<
  Concept,
  | 'anbefaltTerm'
  | 'definisjon'
  | 'kildebeskrivelse'
  | 'merknad'
  | 'tillattTerm'
  | 'frarådetTerm'
  | 'eksempel'
  | 'fagområde'
  | 'bruksområde'
  | 'omfang'
  | 'kontaktpunkt'
  | 'gyldigFom'
  | 'gyldigTom'
  | 'seOgså'
>;

// Remove all empty occurenses of kilde on Egendefinert
const preProcessValues = origValues => {
  // Exit if user is clearing the select box and kilde is null
  const kilder = _.get(origValues, 'kildebeskrivelse.kilde');
  if (!kilder) {
    return origValues;
  }

  // Filter out empty kilder
  const nonEmptyKildes = _.filter(kilder, kilde => !!(kilde.uri || kilde.tekst));

  // Clone the original values but replace kilde with nonEmptyKildes
  const values = _.cloneDeep(origValues);
  values.kildebeskrivelse.kilde = nonEmptyKildes;
  return values;
};

const patchWithPreProcess = (values, { concept, dispatch, lastPatchedResponse }) => {
  const processedValues = preProcessValues(values);
  patchConceptFromForm(processedValues, { concept, dispatch, lastPatchedResponse });
  validateConceptForm(processedValues, schema, concept, dispatch);
};

const config = {
  mapPropsToValues: ({
    concept: {
      anbefaltTerm = { navn: {} },
      definisjon = { tekst: {} },
      kildebeskrivelse = null,
      merknad = '',
      tillattTerm = [],
      frarådetTerm = [],
      eksempel = '',
      fagområde = '',
      bruksområde = [],
      omfang = null,
      kontaktpunkt = null,
      gyldigFom = null,
      gyldigTom = null,
      seOgså = []
    }
  }: FormProps) => ({
    anbefaltTerm,
    definisjon,
    kildebeskrivelse,
    merknad,
    tillattTerm,
    frarådetTerm,
    eksempel,
    fagområde,
    bruksområde,
    omfang,
    kontaktpunkt,
    gyldigFom,
    gyldigTom,
    seOgså
  }),
  validationSchema: schema,
  validate: _.throttle(patchWithPreProcess, 1500),
  isInitialValid: (values: FormProps) => schema.isValidSync(values.concept),
  validateOnBlur: false,
  handleSubmit() {}
};

export const FormConcept = withFormik<FormProps, FormValues>(config)(FormConceptPure);
