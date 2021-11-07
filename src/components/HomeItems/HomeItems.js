import {Image, ItemsWrapper, Label, Text, TextWrapper, ItemWrapper } from './HomeItems.styles'
import Bowl from "../../assets/vase1.jpg"
import Urn from "../../assets/vase2.jpg"
import Bouquet from "../../assets/vase3.jpg"



export function HomeItems() {
    return (
        <div>
            <ItemsWrapper>
            <ItemWrapper>
                <Image src={Bowl}/>
                <TextWrapper>
                    <Label>Bowl</Label>
                    <Text>Placing fresh flowers or dry filler arrangements in a bowl might not be your first instinct </Text>
                </TextWrapper>
            </ItemWrapper>
            <ItemWrapper>
                <Image src={Urn}/>
                <TextWrapper>
                    <Label>Urn</Label>
                    <Text>Urn vases come in a couple main types. One has a pedestal-style base and tapers to a wider mouth</Text>
                </TextWrapper>
            </ItemWrapper>
            <ItemWrapper>
                <Image src={Bouquet}/>
                <TextWrapper>
                    <Label>Bouquet</Label>
                    <Text>Bouquet vases are of a medium size, which allows them to be utilized just about anywhere you'd like </Text>
                </TextWrapper>
            </ItemWrapper>
            </ItemsWrapper>

        </div>
    );
}