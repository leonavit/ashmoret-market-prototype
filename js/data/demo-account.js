const delivery = 29;

function withTotals(order) {
  const subtotal = order.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  return { ...order, subtotal, delivery, total: subtotal + delivery };
}

export const demoCustomer = {
  customerId: "DEMO-1001",
  displayName: "נופר שיטרית",
  email: "dana.demo@example.com",
  phone: "050-000-0000",
  city: "אשמורת",
  street: "רחוב הדוגמה",
  house: "1",
};

export const demoOrders = [
  withTotals({
    id: "AM-2401",
    createdAt: "2026-10-14T09:30:00.000Z",
    status: "נמסרה",
    timeline: {
      created: "2026-10-14T09:30:00.000Z",
      transit: "2026-10-15T07:00:00.000Z",
      out: "2026-10-16T06:30:00.000Z",
      delivered: "2026-10-16T13:15:00.000Z",
    },
    items: [
      { name: "אורז בסמטי", qty: 2, price: 11.9 },
      { name: "שמן זית כתית מעולה", qty: 1, price: 34.9 },
      { name: "פירורי לחם מוזהבים", qty: 3, price: 12.9 },
    ],
  }),
  withTotals({
    id: "AM-2388",
    createdAt: "2026-10-13T14:10:00.000Z",
    status: "בדרך",
    timeline: {
      created: "2026-10-13T14:10:00.000Z",
      transit: "2026-10-15T08:00:00.000Z",
    },
    items: [
      { name: "קוסקוס בינוני", qty: 2, price: 8.9 },
      { name: "דבש טהור", qty: 1, price: 24.9 },
    ],
  }),
  withTotals({
    id: "AM-2310",
    createdAt: "2026-10-05T11:00:00.000Z",
    status: "בוטלה",
    timeline: {
      created: "2026-10-05T11:00:00.000Z",
      cancelled: "2026-10-06T08:20:00.000Z",
    },
    items: [
      { name: "פפריקה מתוקה", qty: 1, price: 7.9 },
      { name: "כורכום טחון", qty: 1, price: 6.4 },
    ],
  }),
];

export function getDemoOrder(id) {
  return demoOrders.find((order) => order.id === id) || null;
}
