import { IButtonData } from "../interface/buttons.interface";

export class ButtonsData implements IButtonData {
    public buttonId: number;
    public title: string;
    public action: string;
    public fontColor?: string;
    public buttonColor?: string;
    public borderRadius?: number;
    public buttonText?: string;
    public buttonDetails?: string;
    public icon?: string;
    public iconColor?: string;

    constructor({
        buttonId,
        title,
        action,
        fontColor,
        buttonColor,
        borderRadius,
        buttonText,
        buttonDetails,
        icon,
        iconColor
    }: IButtonData) {
        this.buttonId = buttonId;
        this.title = title;
        this.action = action;
        this.fontColor = fontColor;
        this.buttonColor = buttonColor;
        this.borderRadius = borderRadius;
        this.buttonText = buttonText;
        this.buttonDetails = buttonDetails;
        this.icon = icon;
        this.iconColor = iconColor;
    }

    getButtonLabel(): string {
        return this.buttonText || this.title;
    }

    isValidHexColor(color: string): boolean {
        const hexColorRegex = /^#([0-9A-F]{3}){1,2}$/i;
        return hexColorRegex.test(color);
    }

    hasValidColors(): boolean {
        return (!this.fontColor || this.isValidHexColor(this.fontColor)) &&
            (!this.buttonColor || this.isValidHexColor(this.buttonColor)) &&
            (!this.iconColor || this.isValidHexColor(this.iconColor));
    }
}
