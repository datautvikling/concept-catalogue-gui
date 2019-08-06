import _ from 'lodash';
import { withFormik } from 'formik';
import { FormUseOfTermPure } from './form-useOfConcept-pure.component';
import { schema } from './form-useOfConcept.schema';
import { patchConceptFromForm } from '../../../lib/patchConceptForm';
import { Concept } from '../../../domain/Concept';
import { validateConceptForm } from '../../../lib/validateConceptForm';

interface FormProps {
  concept: Concept;
  dispatch: Function;
}

type FormValues = Pick<Concept, 'eksempel' | 'fagområde' | 'bruksområde' | 'omfang'>;

const config = {
  mapPropsToValues: ({ concept: { eksempel = '', fagområde = '', bruksområde = [], omfang = null } }: FormProps) => ({
    eksempel,
    fagområde,
    bruksområde,
    omfang
  }),
  validationSchema: schema,
  validate: _.throttle((values, { concept, dispatch }) => {
    validateConceptForm(values, schema, concept, dispatch);
  }, 250),
  handleSubmit() {}
};

export const FormUseOfTerm = withFormik<FormProps, FormValues>(config)(FormUseOfTermPure);
