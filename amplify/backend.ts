import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { chatFunction } from './functions/chat/resource.js';

const backend = defineBackend({
  auth,
  chatFunction
});

const { cfnIdentityPool } = backend.auth.resources.cfnResources;
cfnIdentityPool.allowUnauthenticatedIdentities = false;