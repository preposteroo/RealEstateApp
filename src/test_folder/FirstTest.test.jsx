import { render, screen } from '@testing-library/react'
import Navbar from '../components/navbar/Navbar'

test('Navbar renders without errors', () => {
    render(<Navbar />);
  });

  test('Navbar displays the website name', () => {
    const { getByText } = render(<Navbar />);
    const websiteName = getByText('TerraTroveHomes.com');
    expect(websiteName).toBeInTheDocument();
  });