import { createSlice } from "@reduxjs/toolkit";

const sounterProductSlice = createSlice({
    name: "counterProduct",
    initialState: {
        count: {},
        data: [],
        isOpen: false,
    },
    reducers: {
        increment: (state, action) => {
            const product = action.payload;

            if (!state.count[product.id]) {
                state.count[product.id] = 0;
            }
            state.count[product.id] += 1;

            const existing = state.data.find(item => item.id === product.id);
            if (existing) {
                existing.count = state.count[product.id];
                existing.total = product.price * existing.count;
            } else {
                state.data.push({
                    ...product,
                    count: 1,
                    originalPrice: product.price,
                    total: product.price
                });
            }
        },
        decrement: (state, action) => {
            const productId = action.payload;

            if (state.count[productId] > 0) {
                state.count[productId] -= 1;
            }

            if (state.count[productId] === 0) {
                state.data = state.data.filter(item => item.id !== productId);
                return;
            }

            const existing = state.data.find(item => item.id === productId);
            if (existing) {
                if (state.count[productId] <= 0) {
                    state.data = state.data.filter(item => item.id !== productId);
                    delete state.count[productId];
                } else {
                    existing.count = state.count[productId];
                    existing.total = existing.count * existing.price;
                }
            }
        },

        removeItem: (state, action) => {
            const productId = action.payload;
            state.data = state.data.filter(item => item.id !== productId);
            if (state.count[productId] !== undefined) delete state.count[productId];
        }
    },
})

export const { increment, decrement, removeItem } = sounterProductSlice.actions;
export default sounterProductSlice.reducer;