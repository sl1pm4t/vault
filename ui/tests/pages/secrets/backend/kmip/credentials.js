import { create, clickable, visitable } from 'ember-cli-page-object';
import ListView from 'vault/tests/pages/components/list-view';

export default create({
  ...ListView,
  visit: visitable('/vault/secrets/:backend/kmip/scopes/:scope/roles/:role/credentials'),
  visitDetail: visitable('/vault/secrets/:backend/kmip/scopes/:scope/roles/:role/credentials/:serial'),
  create: clickable('[data-test-role-create]'),
  credentialsLink: clickable('[data-test-kmip-link-credentials]'),
  generateCredentialsLink: clickable('[data-test-kmip-link-generate-credentials]'),
  roleDetailsLink: clickable('[data-test-kmip-link-role-details]'),
  backToRoleLink: clickable('[data-test-kmip-link-back-to-role]'),
  submit: clickable('[data-test-edit-form-submit]'),
});
