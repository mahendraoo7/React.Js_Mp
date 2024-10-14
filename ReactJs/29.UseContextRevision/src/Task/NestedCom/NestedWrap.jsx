import React from "react";
import Counter from "./Counter";

const NestedLevel1 = () => <NestedLevel2/>
const NestedLevel2 = () => <NestedLevel3/>
const NestedLevel3 = () => <Counter/>

export {NestedLevel1, NestedLevel2, NestedLevel3}