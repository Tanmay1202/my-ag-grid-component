# MyAgGridApp

This project is an Angular application featuring an AG Grid table with custom styling.

## Getting Started

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.1.

### Installation

1.  Clone the repository (if applicable) or navigate to the project directory.
2.  Install the dependencies:

    ```bash
    npm install
    ```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## AG Grid Implementation

The project uses AG Grid to display data. The grid is configured in `src/app/ag-grid-view/ag-grid-view.ts` with specific column definitions and sample row data. Custom cell renderers (`requestTypeBadge` and `statusBadge`) are used to display styled badges for the 'Request Type' and 'Status' columns.

## Custom Styling

The AG Grid table's appearance is customized based on a provided screenshot. The styles are defined in `src/app/ag-grid-view/ag-grid-view.css` and override the default Quartz theme. Key styling applied includes:

- Dark blue header with rounded top corners.
- White rows with light blue horizontal borders.
- Custom styles for the 'Request Type' and 'Status' badges.
- Specific coloring for the action icons (View, Logs, and Action).

Note that `!important` flags were used in some CSS rules to ensure overrides against the default theme.
