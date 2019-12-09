export default interface IButton {
  /**
   * Handle onClick event
   */
  onClick(): void;
  /**
   * Set theme as primary
   */
  primary?: boolean;
  /**
   * Set theme as secondary
   */
  secondary?: boolean;
  /**
   * Set theme as default
   */
  default?: boolean;
  /**
   * Combined with theme, invert background
   */
  outlined?: boolean;
  /**
   * Set size as small
   */
  small?: boolean;
  /**
   * Set size as medium
   */
  medium?: boolean;
  /**
   * Set size as large
   */
  large?: boolean;
}
