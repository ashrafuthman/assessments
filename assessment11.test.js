import { render, screen, fireEvent } from '@testing-library/react';
import { WorkoutList } from './WorkoutList';
import * as useWorkoutsModule from './useWorkouts';
import '@testing-library/jest-dom';

describe('WorkoutList', () => {
  const mockData = [
    { id: 1, name: 'Full Body Burn' },
    { id: 2, name: 'Quick Cardio' },
    { id: 3, name: 'Core Crusher' }
  ];

  it('shows loading message initially', () => {
    jest.spyOn(useWorkoutsModule, 'useWorkouts').mockReturnValue({
      data: null,
      error: null,
      loading: true
    });

    render(<WorkoutList />);
    expect(screen.getByText(/Loading workouts/i)).toBeInTheDocument();
  });

  it('shows error message', () => {
    jest.spyOn(useWorkoutsModule, 'useWorkouts').mockReturnValue({
      data: null,
      error: 'Failed to load',
      loading: false
    });

    render(<WorkoutList />);
    expect(screen.getByText(/Error: Failed to load/i)).toBeInTheDocument();
  });

  it('shows workout list and can search', () => {
    jest.spyOn(useWorkoutsModule, 'useWorkouts').mockReturnValue({
      data: mockData,
      error: null,
      loading: false
    });

    render(<WorkoutList />);

    expect(screen.getByText(/Full Body Burn/i)).toBeInTheDocument();
    expect(screen.getByText(/Quick Cardio/i)).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText(/search workouts/i), {
      target: { value: 'core' }
    });

    expect(screen.queryByText(/Quick Cardio/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Core Crusher/i)).toBeInTheDocument();
  });

  it('can toggle favorite workout', () => {
    jest.spyOn(useWorkoutsModule, 'useWorkouts').mockReturnValue({
      data: mockData,
      error: null,
      loading: false
    });

    render(<WorkoutList />);
    const checkbox = screen.getAllByRole('checkbox')[0];

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
