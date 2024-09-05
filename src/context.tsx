import React from "react";
import { IItems } from "./redux/items/itemSlice";

export interface ContextType {
	catLikePage: IItems[] | [];
	onAddFavorites: (props: IItems) => void;
}

const defaultContext: ContextType = {
	catLikePage: [],
	onAddFavorites: () => {},
};

const AppContext = React.createContext<ContextType>(defaultContext);

export default AppContext;
