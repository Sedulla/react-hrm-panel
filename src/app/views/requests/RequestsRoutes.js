import { dayOffRequestRoutes } from '../requests/day-off/DayOffRoutes';
import { businessTripRequestRoutes } from '../requests/business-trip/BusinessTripRoutes';
import { leaveRequestRoutes } from '../requests/leave/LeaveRoutes';
import { itSupplyRequestRoutes } from '../requests/it-supply/ItSupplyRoutes';
import { purchaseRequestRoutes } from '../requests/purchase/PurchaseRoutes';

export const requestsRoutes = [
  ...dayOffRequestRoutes,
  ...businessTripRequestRoutes,
  ...leaveRequestRoutes,
  ...itSupplyRequestRoutes,
  ...purchaseRequestRoutes,
];
