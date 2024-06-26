import React from "react";
import { AppContext } from "../../../Context";

import { SearchInput } from "../SearchInput";
import { JobBoardGrid } from "../JobBoardGrid";
import { JobsCountContainer } from "../JobsCountContainer";
import { MunicipalityGrid } from "../MunicipalityGrid";
import { FiltersInputs } from "../FiltersInputs";
import { Map } from "../Map";
import { ResultsGrid } from "../ResultsGrid";
// import { Title } from "../Title";

import "./styles.css";
import { Button } from "../ButtonCard";
import { NavImagesCard } from "../GovNavbars/NavImagesCard";


const FiltersAndMapContainer = () => {
    const context = React.useContext(AppContext);
    
    return(
        <div className="filters-and-map-container">
            <div className="filters-container">
                <NavImagesCard/>
                
                <SearchInput/>
                
                {context.filters !== null && 
                    <Button
                        onClick={() => {context.clearFilters()}}
                    >
                        Limpiar Filtros
                    </Button>
                }


                <FiltersInputs/>

                <JobBoardGrid/>
                <JobsCountContainer/>
                <MunicipalityGrid/>
                
            </div>
            <div className="map-and-results-container">
                <Map/>
                <ResultsGrid/>
            </div>

        </div>
    );
}

export { FiltersAndMapContainer };