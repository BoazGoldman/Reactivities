import CounterStore from "./counterStore"
import { createContext } from "react";
import UiStore from "./uiStore";

interface Store {
counterstore: CounterStore;
uiStore: UiStore;
}

export const store: Store = {
    counterstore: new CounterStore(),
    uiStore: new UiStore(),
}

export const StoreContext = createContext(store);