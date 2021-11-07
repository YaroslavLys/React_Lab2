import {Wrapper, FilterSelector, LabelText, ApplyButton, FilterWrapper, HorLine} from "./Filter.styles";

export function Filter() {
    return (
        <div>
            <HorLine/>
            <Wrapper>
                <FilterWrapper>
                    <LabelText>Sort by:</LabelText>
                    <FilterSelector>
                        <option selected>Choose filter</option>
                        <option value="Something">Price</option>
                        <option value="Something">Name</option>
                    </FilterSelector>
                    <LabelText>Order by:</LabelText>
                    <FilterSelector>
                        <option selected>Choose order</option>
                        <option value="Something">Ascending</option>
                        <option value="Something">Descending</option>
                    </FilterSelector>
                    <LabelText>Price:</LabelText>
                    <FilterSelector>
                        <option selected>Choose price</option>
                    </FilterSelector>
                </FilterWrapper>
                <ApplyButton>Apply</ApplyButton>
            </Wrapper>
            <HorLine style={{marginTop: '10px'}}/>
        </div>
    );
}