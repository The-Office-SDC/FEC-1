import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddReviewModal from '../../client/src/Components/RatingsAndReviews/ReviewList/AddReviewModal.jsx';
import axios from 'axios';
// Import mock data
import mockReviewData from './mockReviewData.js';
import mockReviewMetaData from './mockReviewMetaData.js';
import mockProductData from './mockProductDataReviews.js';
// Mock axios using jest
jest.mock('axios');

afterEach(() => {
  if (console.error.mockRestore !== undefined) {
    console.error.mockRestore();
  }
});

test('Renders AddReviewModal', async () => {
  // Intercept any axios requests made by the component being tested and return the mockup data instead
  axios.get.mockImplementation((url) => {
    switch (url) {
      case '/snuggie/reviews':
        return Promise.resolve({
          data: mockReviewData.camoOnesie
        });
      case '/snuggie/reviews/meta':
        return Promise.resolve({
          data: mockReviewMetaData.camoOnesieMetaData
        });
      default:
        return Promise.reject(new Error('not found'));
    }
  });
  // Render the widget
  await act( async () => {
    render(<AddReviewModal  metaData={mockReviewMetaData.camoOnesie} chosenProduct={mockProductData.camoOnesie}/>);
  })

});