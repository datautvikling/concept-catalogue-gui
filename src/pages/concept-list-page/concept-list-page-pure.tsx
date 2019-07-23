import React from 'react';
import _ from 'lodash';
import { getTranslateText } from '../../lib/translateText';
import { ConceptList } from './concept-list/concept-list.component';
import { ConceptTitle } from './concept-title/concept-title.component';
import { NewConceptButton } from '../../components/new-concept-button/new-concept-button.component';
import { registrationApiPost } from '../../api/concept-catalogue-api';

interface Props {
  myProp: any;
  history: any;
  concepts: object;
  publisher: object;
  catalogId: string;
}

const style = {
  textDecoration: 'none'
};

export const ConceptListPagePure = ({ history, myProp, concepts, publisher, catalogId }: Props): JSX.Element => {
  // Create new Concept
  const createNewConcept = () => {
    // POST Body
    var postBody = {
      anbefaltTerm: '',
      status: 'utkast',
      ansvarligVirksomhet: {
        id: catalogId
      }
    };

    // Get response and redirect
    registrationApiPost('/begreper/', postBody).then(response => {
      // Get conceptId from Header
      var location = response.headers.get('Location');
      var conceptId = location.split('/').pop();

      // Redirect
      history.push(`/${catalogId}/${conceptId}`);
    });
  };

  return (
    <div className="container">
      <div className="row mb-2">
        <ConceptTitle title={getTranslateText(_.get(publisher, 'prefLabel'))} />
      </div>
      <div className="mb-2">
        <NewConceptButton parentOnClick={createNewConcept} />
      </div>
      <div className="mb-2">
        <ConceptList items={concepts} catalogId={catalogId} />
      </div>
    </div>
  );
};
