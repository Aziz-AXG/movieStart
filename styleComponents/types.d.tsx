import { ReactNode } from "react";
import {ImageProps, StyleProp,TextStyle,ViewStyle} from 'react-native'
//styled.d.ts
import "styled-components/native";
import { theme } from "./themes/theme";
import { Movie } from "~/interfaces/types";
import { DefaultTheme } from "styled-components/native";

type Theme = typeof theme;

declare module "styled-components/native" {
  export interface DefaultTheme extends Theme {}
}

export interface ItemProps{
    movie:Movie,
    from:string,
    children?: ReactNode,
    style?: StyleProp<ViewStyle>,
    onPress?:()=>void,
    bg?:string,
    sizes?: 'sm' | 'md' | 'lg' | 'xl'
}

export interface StyledItemProps{
  theme: DefaultTheme;
  bg?: string;
  sizes?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface CardProps{
    children?: ReactNode,
    movie:Movie,
    from:string,
    bg?:string,
    sizes?: 'sm' | 'md' | 'lg' | 'xl',
}

export interface ImageItemProps extends ImageProps {
  sizes?: 'sm' | 'md' | 'lg' | 'xl';
}
export interface TextProps{
  children:ReactNode,
  sizes?: 'sm' | 'md' | 'lg' | 'xl',
  style?: StyleProp<TextStyle>
}

export interface StyledTextProps{
  sizes?: 'sm' | 'md' | 'lg' | 'xl'
}