import React from 'react';

import { localization } from '../../lib/localization';
import { FormTemplate } from '../../components/form-template/form-template.component';
import { FormTerm } from './form-term/form-term.component';

interface Props {
  concept: object;
}

export const ConceptRegistrationPagePure = ({ concept }: Props): JSX.Element => {
  return (
    <div className="container">
      <div className="row mb-2">
        <div className="col-md-2" />
        <div className="col-md-8">
          <FormTemplate title={localization.formTerm} required={true}>
            <FormTerm concept={concept} />
          </FormTemplate>
        </div>
      </div>
    </div>
  );
};
