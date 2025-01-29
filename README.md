# README

## Jain

A live version of the application can be accessed at:

**[https://dcohen0123.github.io/jain](https://dcohen0123.github.io/jain)**

## Overview

This repository contains a React application for displaying historical stock data in a dynamic chart. Users can select a specific price/volume attribute (e.g., _Open_, _Close_, _Volume_, etc.) to visualize over a selected time frame (the last 12 months for this example).

## Technical Decisions / Tradeoffs

1. **React + Vite**

    - **Reason**: Vite provides a faster development server and build process compared to Create React App.
    - **Tradeoff**: Some configurations or integrations might differ from well-documented CRA patterns, but the performance benefits are substantial.

2. **TypeScript**

    - **Reason**: TS helps catch errors at compile-time and improves code readability.
    - **Tradeoff**: Requires some additional boilerplate and type definitions. However, the safety and clarity are worth it.

3. **Highcharts**

    - **Reason**: It’s a mature library with extensive features, great for quick and powerful visualizations.
    - **Tradeoff**: It adds a relatively large bundle size compared to smaller chart libraries. But we gain robust functionality, like built-in zooming and tooltips.

4. **Custom Zoom & Hover Handling**

    - **Reason**: We implemented a custom approach to measure the difference between two data points on the chart. This approach involves tracking mouse events and mapping them to the chart’s data points.
    - **Tradeoff**: We had to manually manage state for start and end points in the chart. This is more flexible but requires careful state management and event handling.

5. **Ant Design**
    - **Reason**: Provides pre-styled UI components, speeding up development.
    - **Tradeoff**: There is a bit of overhead and styling constraints that come with it, but it simplifies a lot of the base components.

## Challenges

1. **Mouse Interaction for Delta Measurement**

    - Implementing the logic for capturing start and end points via mouse events was tricky. We had to ensure we correctly updated state on `mouseover` while keeping track of whether the mouse was pressed.

2. **API Data Consistency**

    - The external API can sometimes return incomplete or unexpected data, especially if the symbol is incorrect or dates are out of range. We handle errors with antd’s notification, but robust error-handling is crucial.

3. **Environment Variables**

    - Ensuring the correct environment variables (`VITE_API_URL`, `VITE_API_KEY`, etc.) are set in the hosting environment was a key step. Misconfiguration leads to fetch failures.

4. **Styling with SCSS Modules**
    - Although it provides nice encapsulation, mixing SCSS modules with global styles can sometimes introduce confusion if not consistently applied.

## Potential Improvements

If given more time, here are some areas we could improve:

1. **Responsive / Mobile Layout**

    - Further refine the chart’s responsiveness on small screens. Possibly create a different layout or simpler chart interactions for mobile.

2. **Date Range Picker**

    - Make the date range configurable so users can pick any start/end date from the UI rather than being locked to 12 months.

3. **Caching / State Management**

    - Use a more robust solution (e.g., React Query or SWR) to cache the data, handle retries, and improve performance.

4. **Testing**

    - Expand test coverage beyond unit tests for formatting functions to include integration tests on the chart and data fetching.

5. **Security / Private Routes**
    - If user authentication or private routes are needed, incorporate an Auth layer and add the relevant security best practices.

## Self-Assessment

On a scale of **1** (not strong) to **5** (work of art), here’s how I’d rate myself for this project:

1. **Code structure and cleanliness**: **4**

    - The code is generally well-structured and separated by concerns. Some parts could be further refined or documented.

2. **Completion and polish**: **4**

    - The main functionality is complete and polished, though a few more finishing touches (e.g., responsive layout, additional testing) would be welcome.

3. **Execution and velocity**: **5**
    - Delivered the core application in a short timeframe with functional UI, data fetching, charting, and tests for key utilities.

---

**Thank you for reviewing this project!** If you have any feedback or questions, please open an issue or contact me directly.
