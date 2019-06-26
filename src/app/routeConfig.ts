import { ConceptListPage } from '../pages/concept-list-page/concept-list-page';
import { ConceptRegistrationPage } from '../pages/concept-registration-page/concept-registration-page';
import { PublisherBreadcrumb } from './breadcrumbs/publisher-breadcrumb/publisher-breadcrumb.component';
import { localization } from '../lib/localization';

export const routeConfig = [
  {
    path: '/:catalogId',
    component: ConceptListPage,
    exact: true,
    breadcrumb: props => PublisherBreadcrumb({ ...props, breadCrumbLabel: 'breadCrumbsPublisherList' })
  },
  {
    path: '/list',
    component: ConceptListPage,
    exact: true,
    breadcrumb: props => PublisherBreadcrumb({ ...props, breadCrumbLabel: 'breadCrumbsPublisherList' })
  },
  {
    path: '/:catalogId/:conceptId',
    component: ConceptRegistrationPage,
    exact: true,
    breadcrumb: () => localization.breadCrumbRegisterNewConcept
  }
];