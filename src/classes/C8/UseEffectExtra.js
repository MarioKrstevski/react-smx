export default function UseEffectExtra(props) {
  useEffect(() => {
    updateData(propValue);
  }, [propValue]);
  return <div>C9 works</div>;
}

// Certainly! Here's a list of useEffect practice examples covering common use cases as well as edge cases:

// Fetching Data from an API
// Fetch data from an API when the component mounts.
// Use an empty dependency array to ensure it runs only once.
// javascript
// Copy code
useEffect(() => {
  fetchData();
}, []);
// Updating Data Based on Prop Changes
// Update data when a prop changes.
// Use the prop in the dependency array to watch for changes.
// javascript
// Copy code
useEffect(() => {
  updateData(propValue);
}, [propValue]);
// Subscribing to Events
// Subscribe to an event when the component mounts.
// Unsubscribe when the component unmounts.
// javascript
// Copy code
useEffect(() => {
  subscribeToEvent();
  return () => {
    unsubscribeFromEvent();
  };
}, []);
// Performing Cleanup
// Execute cleanup code when the component unmounts.
// Cleanup code might include unsubscribing from event listeners or clearing intervals.
// javascript
// Copy code
useEffect(() => {
  const interval = setInterval(() => {
    // Some task
  }, 1000);
  return () => {
    clearInterval(interval);
  };
}, []);
// Handling Multiple Effects
// Use multiple useEffect hooks to separate concerns.
// Each useEffect can focus on a specific task.
// javascript
// Copy code
useEffect(
  () => {
    fetchData();
  },
  [
    /* Dependency array */
  ]
);

useEffect(
  () => {
    subscribeToEvent();
    return () => {
      unsubscribeFromEvent();
    };
  },
  [
    /* Dependency array */
  ]
);
// Debouncing Input Changes
// Perform an action after a certain delay once the user stops typing.
// Use clearTimeout to cancel the previous timeout on every input change.
// javascript
// Copy code
useEffect(() => {
  const timeoutId = setTimeout(() => {
    // Perform action after debounce delay
  }, debounceDelay);
  return () => {
    clearTimeout(timeoutId);
  };
}, [inputValue]);
// Dependency Array Gotchas
// Be aware of dependency array gotchas such as using stale state or props.
// Use functional updates to avoid dependency on stale state.
// javascript
// Copy code
useEffect(() => {
  // This effect will use the latest count value
  setTotal(total + count);
}, [count]);

useEffect(() => {
  // This effect will only run once with the initial value of count
  setTotal(total + count);
}, []);
// These examples cover a wide range of scenarios where you might use useEffect, from fetching data to handling cleanup and subscribing to events. They should provide a good starting point for practicing useEffect.

// Homework Exercise: Timer Component
// Create a Timer component that displays a countdown timer. The component should have the following features:

// Countdown Timer Display: Display the countdown timer in minutes and seconds format.
// Start, Pause, and Reset Buttons: Buttons to start, pause, and reset the timer.
// Functionality:
// When the user clicks the "Start" button, the timer should start counting down from a specified duration (e.g., 5 minutes).
// The timer should decrement by one second every second.
// When the timer reaches 0, it should stop automatically.
// The "Pause" button should pause the timer, allowing the user to resume from where it was paused.
// The "Reset" button should reset the timer to its initial state.
// Edge Cases:
// Handle cases where the user clicks "Start" multiple times without pausing or resetting.
// Handle cases where the user tries to pause or reset the timer when it's not running.
// Cleanup:
// Ensure all resources are cleaned up when the component unmounts.

// Subscribing to External Events:
// Exercise: Build a React component that subscribes to the browser's geolocation API. Display the user's current location (latitude and longitude) in the component.

// Cleaning Up Effects:
// Exercise: Develop a React component that sets up a timer to fetch new data from an API every 5 seconds. Ensure that the timer is cleared when the component unmounts to prevent memory leaks.

// Debouncing or Throttling:
// Exercise: Create an input component that fetches search results from an API based on user input. Use useEffect to debounce the API requests, ensuring that they are not sent too frequently while the user is typing.
