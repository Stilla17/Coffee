import { createSlice } from "@reduxjs/toolkit";

const counterProductSlice = createSlice({
    name: "counterProduct",
    initialState: {
        count: {},
        data: [],
        isOpen: false,
    },
    reducers: {
        increment: (state, action) => {
            const product = action.payload;
            const key = `${product.category}-${product.id}`;

            if (!state.count[key]) {
                state.count[key] = 0;
            }
            state.count[key] += 1;

            const existing = state.data.find(item => item.key === key);
            if (existing) {
                existing.count = state.count[key];
                existing.total = product.price * existing.count;
            } else {
                state.data.push({
                    key,
                    ...product,
                    count: 1,
                    originalPrice: product.price,
                    total: product.price
                });
            }
        },
        decrement: (state, action) => {
            const { id, category } = action.payload;
            const key = `${category}-${id}`;

            if (state.count[key] > 0) {
                state.count[key] -= 1;
            }

            if (state.count[key] === 0) {
                state.data = state.data.filter(item => item.key !== key);
                return;
            }

            const existing = state.data.find(item => item.key === key);
            if (existing) {
                if (state.count[key] <= 0) {
                    state.data = state.data.filter(item => item.key !== key);
                    delete state.count[key];
                } else {
                    existing.count = state.count[key];
                    existing.total = existing.count * existing.price;
                }
            }
        },

        removeItem: (state, action) => {
            const { id, category } = action.payload;
            const key = `${category}-${id}`;
            state.data = state.data.filter(item => item.key !== key);
            if (state.count[key] !== undefined) delete state.count[key];
        }
    },
})

export const { increment, decrement, removeItem } = counterProductSlice.actions;
export default counterProductSlice.reducer;