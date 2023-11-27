import { render, screen, fireEvent, act } from '@testing-library/react';
import axios from 'axios';
import Buy from '../pages/buy/Buy.jsx';


jest.mock('axios');

describe('Buy Component', () => {
  test('renders Buy component', async () => {
    const mockData = [
      {
        id: 1,
        imgsource: 'image-url',
        address: '123 Main St',
        numBed: 3,
        numBath: 2,
        sqf: 1500,
        bName: 'Builder Name',
        bCompany: 'Builder Company',
      },
    ];

    axios.get.mockResolvedValueOnce({ data: mockData });

    render(<Buy />);

    // Wait for the data to be loaded
    await screen.findByText('123 Main St');

    expect(screen.getByText('123 Main St')).toBeInTheDocument();
    expect(screen.getByText('Bedrooms:3')).toBeInTheDocument();
    expect(screen.getByText('Bathrooms:2')).toBeInTheDocument();
    expect(screen.getByText('Sq. Footage:1500')).toBeInTheDocument();
    expect(screen.getByText('Builder Name / Builder Company')).toBeInTheDocument();
  });

  test('adds and removes from favorites correctly', async () => {
    const mockData = [
      {
        id: 1,
        imgsource: 'image-url',
        address: '123 Main St',
        numBed: 3,
        numBath: 2,
        sqf: 1500,
        bName: 'Builder Name',
        bCompany: 'Builder Company',
      },
    ];

    axios.get.mockResolvedValueOnce({ data: mockData });

    render(<Buy />);

    await screen.findByText('123 Main St');

    fireEvent.click(screen.getByText('Add to Favorites'));

    expect(screen.getByText('Remove from Favorites')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Remove from Favorites'));

    expect(screen.getByText('Add to Favorites')).toBeInTheDocument();
  });
});
