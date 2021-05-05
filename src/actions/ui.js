import { types } from "../types/types";

/**
 * @returns {object} - contains the action for the uiReducer
 */

export const emailVerified = () => ({
    type: types.uiEmailVerified
});

export const emailNotVerified = () => ({
    type: types.uiEmailNotVerified
});