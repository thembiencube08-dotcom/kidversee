import { gql } from 'graphql-request';

export const GET_ADMIN_DASHBOARD = gql`
  query GetAdminDashboard {
    productsCount
    ordersCount
    customersCount
    revenue
    lowStockCount
    pendingOrdersCount
  }
`;
