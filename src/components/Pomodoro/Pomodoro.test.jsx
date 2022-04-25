import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pomodoro from './Pomodoro';

describe('Product backlog test suite', () => {
  it('should display an element with "break-label" id containing "Break Time" text (US#1)', () => {
    const { container } = render(<Pomodoro />);
    const breakLabel = container.querySelector('div[id=break-label]');

    expect(breakLabel).toBeInTheDocument();
    expect(breakLabel).toHaveTextContent('Break Time');
  });

  it('should display an element with "session-label" id containing "Session Time" text (US#2)', () => {
    const { container } = render(<Pomodoro />);
    const sessionLabel = container.querySelector('div[id=session-label]');

    expect(sessionLabel).toBeInTheDocument();
    expect(sessionLabel).toHaveTextContent('Session Time');
  });

  it('should display 2 clickable elements with id="break-decrement" and id="session-decrement" (US#3)', () => {
    const { container } = render(<Pomodoro />);
    const breakDecrement = container.querySelector(
      'button[id=session-decrement]'
    );
    const sessionDecrement = container.querySelector(
      'button[id=session-decrement]'
    );

    expect(breakDecrement).toBeInTheDocument();
    expect(sessionDecrement).toBeInTheDocument();
  });
});
