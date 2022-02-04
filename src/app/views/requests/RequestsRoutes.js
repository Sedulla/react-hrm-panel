import { dayOffRequestRoutes } from '../requests/day-off/DayOffRoutes';
import { businessTripRequestRoutes } from '../requests/business-trip/BusinessTripRoutes';

export const requestsRoutes = [
  ...dayOffRequestRoutes,
  ...businessTripRequestRoutes,
  //   ...leaveRequestRoutes,
  //   ...overtimeRequestRoutes,
  //   ...travelRequestRoutes,
  //   ...otherRequestRoutes,
];
