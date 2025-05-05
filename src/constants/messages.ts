/**
 * Application message constants
 */
export const messages = {
  errors: {
    general: 'An unexpected error occurred. Please try again later.',
    unauthorized: 'You are not authorized to perform this action.',
    notFound: 'The requested resource was not found.',
    networkError:
      'Unable to connect to the server. Please check your internet connection.',
    validationFailed:
      'Please correct the errors in the form before submitting.',
    sessionExpired: 'Your session has expired. Please log in again.',
  },
  success: {
    saved: 'Changes saved successfully.',
    created: 'Item created successfully.',
    updated: 'Item updated successfully.',
    deleted: 'Item deleted successfully.',
    uploaded: 'File uploaded successfully.',
  },
  info: {
    loading: 'Loading data...',
    processing: 'Processing your request...',
    confirmation: 'Are you sure you want to proceed?',
    dataRefreshed: 'Data has been refreshed.',
    noDataAvailable: 'No data available.',
  },
  dashboard: {
    welcome: 'Welcome to the dashboard.',
    summary: "Here's a summary of your recent activity.",
    newFeatures: 'Check out the new features available!',
  },
};
