import { WithTranslation } from 'react-i18next';

export interface INextPageProps extends Partial<WithTranslation> {
  namespacesRequired: string[];
}
