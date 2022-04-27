import { render, fireEvent } from '@testing-library/react';
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
      'button[id=break-decrement]'
    );
    const sessionDecrement = container.querySelector(
      'button[id=session-decrement]'
    );

    expect(breakDecrement).toBeInTheDocument();
    expect(sessionDecrement).toBeInTheDocument();
  });

  it('should display 2 clickable elements with id="break-increment" and id="session-increment" (US#4)', () => {
    const { container } = render(<Pomodoro />);
    const breakIncrement = container.querySelector(
      'button[id=break-increment]'
    );
    const sessionIncrement = container.querySelector(
      'button[id=session-increment]'
    );

    expect(breakIncrement).toBeInTheDocument();
    expect(sessionIncrement).toBeInTheDocument();
  });

  it('should display an element with id="break-length", that displays on load a value of 5 (US#5)', () => {
    const { container } = render(<Pomodoro />);
    const breakTime = container.querySelector('span[id=break-length]');

    expect(breakTime).toBeInTheDocument();
    expect(breakTime).toHaveTextContent('5');
  });

  it('should display an element with id="session-length", that displays on load a value of 25 (US#6)', () => {
    const { container } = render(<Pomodoro />);
    const sessionTime = container.querySelector('span[id=session-length]');

    expect(sessionTime).toBeInTheDocument();
    expect(sessionTime).toHaveTextContent('25');
  });

  it('should display an element with id="timer-label" containing on load "Session" text (US#7)', () => {
    const { container } = render(<Pomodoro />);
    const sessionTime = container.querySelector('span[id=timer-label]');

    expect(sessionTime).toBeInTheDocument();
    expect(sessionTime).toHaveTextContent('Session');
  });

  it('should display an element with id="time-left" containing a value displayed in mm:ss format (US#8)', () => {
    const { container } = render(<Pomodoro />);
    const timeLeft = container.querySelector('span[id=time-left]');

    expect(timeLeft).toBeInTheDocument();
    expect(timeLeft.innerHTML).toMatch(/^\d{2}:\d{2}$/);
  });

  it('should display a clickable element with id="start_stop" (US#9)', () => {
    const { container } = render(<Pomodoro />);
    const startStopButton = container.querySelector('button[id=start_stop]');

    expect(startStopButton).toBeInTheDocument();
  });

  it('should display a clickable element with id="reset" (US#10)', () => {
    const { container } = render(<Pomodoro />);
    const resetButton = container.querySelector('button[id=reset]');

    expect(resetButton).toBeInTheDocument();
  });

  // US#11 should be tested logically after US#21

  it('should decrement by 1 #break-length element when clicking on #break-decrement button (US#12)', () => {
    const { container } = render(<Pomodoro />);
    const breakTime = container.querySelector('span[id=break-length]');
    const breakDecrement = container.querySelector(
      'button[id=break-decrement]'
    );

    expect(breakTime).toHaveTextContent('5');

    fireEvent.click(breakDecrement);

    expect(breakTime).toHaveTextContent('4');
  });

  it('should increment by 1 #break-length element when clicking on #break-increment button (US#13)', () => {
    const { container } = render(<Pomodoro />);
    const breakTime = container.querySelector('span[id=break-length]');
    const breakIncrement = container.querySelector(
      'button[id=break-increment]'
    );

    expect(breakTime).toHaveTextContent('5');

    fireEvent.click(breakIncrement);

    expect(breakTime).toHaveTextContent('6');
  });

  it('should decrement by 1 #session-length element when clicking on #session-decrement button (US#14)', () => {
    const { container } = render(<Pomodoro />);
    const sessionTime = container.querySelector('span[id=session-length]');
    const sessionDecrement = container.querySelector(
      'button[id=session-decrement]'
    );

    expect(sessionTime).toHaveTextContent('25');

    fireEvent.click(sessionDecrement);

    expect(sessionTime).toHaveTextContent('24');
  });

  it('should increment by 1 #session-length element when clicking on #session-increment button (US#15)', () => {
    const { container } = render(<Pomodoro />);
    const sessionTime = container.querySelector('span[id=session-length]');
    const sessionIncrement = container.querySelector(
      'button[id=session-increment]'
    );

    expect(sessionTime).toHaveTextContent('25');

    fireEvent.click(sessionIncrement);

    expect(sessionTime).toHaveTextContent('26');
  });

  it('should not decrement #break-length element under 1 (US#16)', () => {
    const { container } = render(<Pomodoro />);
    const breakTime = container.querySelector('span[id=break-length]');
    const breakDecrement = container.querySelector(
      'button[id=break-decrement]'
    );

    [...Array(10)].forEach(() => {
      fireEvent.click(breakDecrement);
    });

    expect(breakTime).toHaveTextContent('1');
  });

  it('should not decrement #session-length element under 1 (US#16)', () => {
    const { container } = render(<Pomodoro />);
    const sessionTime = container.querySelector('span[id=session-length]');
    const sessionDecrement = container.querySelector(
      'button[id=session-decrement]'
    );

    [...Array(30)].forEach(() => {
      fireEvent.click(sessionDecrement);
    });

    expect(sessionTime).toHaveTextContent('1');
  });

  it('should not increment #break-length element above 60 (US#17)', () => {
    const { container } = render(<Pomodoro />);
    const breakTime = container.querySelector('span[id=break-length]');
    const breakIncrement = container.querySelector(
      'button[id=break-increment]'
    );

    [...Array(60)].forEach(() => {
      fireEvent.click(breakIncrement);
    });

    expect(breakTime).toHaveTextContent('60');
  });

  it('should not increment #session-length element above 60 (US#17)', () => {
    const { container } = render(<Pomodoro />);
    const sessionTime = container.querySelector('span[id=session-length]');
    const sessionIncrement = container.querySelector(
      'button[id=session-increment]'
    );

    [...Array(40)].forEach(() => {
      fireEvent.click(sessionIncrement);
    });

    expect(sessionTime).toHaveTextContent('60');
  });

  it('should run the timer from #session-length value when clicking on #start_stop button (US#18)', async () => {
    jest.useFakeTimers();

    const { container } = render(<Pomodoro />);
    const sessionDecrement = container.querySelector(
      'button[id=session-decrement]'
    );
    const startStopButton = container.querySelector('button[id=start_stop]');
    const timeLeft = container.querySelector('span[id=time-left]');

    [...Array(15)].forEach(() => {
      fireEvent.click(sessionDecrement);
    });

    fireEvent.click(startStopButton);

    jest.advanceTimersByTime(20000);

    fireEvent.click(startStopButton);

    expect(timeLeft).toHaveTextContent('09:40');

    jest.useRealTimers();
  });

  it('should display the remaining time in mm:ss in #time-left element when the timer is running (US#19)', async () => {
    jest.useFakeTimers();

    const { container } = render(<Pomodoro />);
    const startStopButton = container.querySelector('button[id=start_stop]');
    const timeLeft = container.querySelector('span[id=time-left]');

    fireEvent.click(startStopButton);

    jest.advanceTimersByTime(5000);

    expect(timeLeft.innerHTML).toMatch(/^\d{2}:\d{2}$/);

    fireEvent.click(startStopButton);

    jest.useRealTimers();
  });
});
