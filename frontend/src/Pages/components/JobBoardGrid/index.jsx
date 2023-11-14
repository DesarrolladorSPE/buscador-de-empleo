import React from "react";

import { MdElderly } from "react-icons/md";
import { FiltersWrapper } from "../FiltersWrapper";
import { JobBoardCard } from "./JobBoardCard";
import { HiUserGroup } from "react-icons/hi";
import { BsFillBuildingFill, BsFillPersonFill } from "react-icons/bs";
import { PiGasCanFill } from "react-icons/pi";
import { FaHome } from "react-icons/fa";

import { SubTitle } from "../SubTitle";

import "./styles.css";
import { AppContext } from "../../../Context";

const JobBoardGrid = () => {
    const context = React.useContext(AppContext);

    return(
        <FiltersWrapper
            flexDirection={"column"}
            padding={20}
            gap={10}
        >
            
            <SubTitle text={"Otras Bolsas"}/>

            <JobBoardCard
                icon={<FaHome/>}
                text={"Todo"}
                onClick={() => {
                    context.handleFilterChange("HIDROCARBUROS", "")
                    context.handleFilterChange("PLAZA_PRACTICA", "");
                    context.handleColorsByFilters(1);
                }}
                isActive={context.activeButton === 1}
            />
            <JobBoardCard
                icon={<BsFillBuildingFill/>}
                text={"Plaza de Prácticas"}
                onClick={() => {
                    context.handleFilterChange("HIDROCARBUROS", 1)
                    context.handleFilterChange("PLAZA_PRACTICA", 1);
                    context.handleColorsByFilters(2);
                }}
                isActive={context.activeButton === 2}
            />
            <JobBoardCard
                icon={<PiGasCanFill/>}
                text={"Hidrocarburos"}
                onClick={() => {
                    context.handleFilterChange("PLAZA_PRACTICA", "");
                    context.handleFilterChange("HIDROCARBUROS", 1)
                    context.handleColorsByFilters(3);
                }}
                isActive={context.activeButton === 3}
            />
            <JobBoardCard
                icon={<BsFillPersonFill/>}
                text={"Joven"}
                onClick={() => {
                    context.handleFilterChange("HIDROCARBUROS", "")
                    context.handleColorsByFilters(4);
                }}
                isActive={context.activeButton === 4}
            />
            <JobBoardCard
                icon={<HiUserGroup/>}
                text={"Jóvenes"}
                onClick={() => {
                    context.handleFilterChange("HIDROCARBUROS", "")
                    context.handleColorsByFilters(5);
                }}
                isActive={context.activeButton === 5}
            />
            <JobBoardCard
                icon={<MdElderly/>}
                text={"Adulto Mayor"}
                onClick={() => {
                    context.handleFilterChange("HIDROCARBUROS", "")
                    context.handleColorsByFilters(6);
                }}
                isActive={context.activeButton === 6}
            />
        </FiltersWrapper>
    );
}

export { JobBoardGrid };