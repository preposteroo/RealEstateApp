import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../components/search/Search.jsx';

describe('Search Component', () => {
  test('renders Search component', () => {
    render(<Search onSearch={() => {}} />);

    // Check if the component renders properly
    expect(screen.getByPlaceholderText('Please Enter the Name of a Broker!')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  test('handles search input and click', () => {
    const onSearchMock = jest.fn();
    render(<Search onSearch={onSearchMock} />);

    // Simulate user typing in the input field
    fireEvent.change(screen.getByPlaceholderText('Please Enter the Name of a Broker!'), {
      target: { value: 'John Doe' },
    });

    // Check if the input value is updated
    expect(screen.getByPlaceholderText('Please Enter the Name of a Broker!')).toHaveValue('John Doe');

    // Simulate user clicking the search button
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));

    // Check if the onSearch function is called with the correct argument
    expect(onSearchMock).toHaveBeenCalledWith('John Doe');
  });
});
