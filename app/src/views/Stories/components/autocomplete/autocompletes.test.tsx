import { render, fireEvent, waitFor, screen } from '../../../../test-utils';
import '@testing-library/jest-dom/extend-expect';

import Autocompletes from './autocompletes';

describe('Autocompletes', () => {
  test('renders Autocompletes component', () => {
    render(<Autocompletes />);

    const input = screen.getByPlaceholderText('Companies, Organisations, People or Places...');
    const button = screen.getByText('Search');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();    
  });
});