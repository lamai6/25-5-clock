import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pomodoro from './Pomodoro';

describe('Product backlog test suite', () => {
  it('should display an element with "break-label" id containing "Break Length" text (US#1)', () => {
    const { container } = render(<Pomodoro />);
    const breakLabel = container.querySelector('div[id=break-label]');

    expect(breakLabel).toBeInTheDocument();
    expect(breakLabel).toHaveTextContent('Break Length');
  });
});
