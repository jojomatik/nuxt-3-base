import { Vue as DefaultVue } from "vue-class-component";
import { useI18n } from "vue-i18n";

/**
 * A class extending the default vue class with additional features.
 */
export default class Vue extends DefaultVue {
  /**
   * The local i18n instance.
   * @private
   */
  private _i18n = useI18n();

  /**
   * Locale message translation
   */
  t = this._i18n.t;

  /**
   * Datetime formatting
   */
  d = this._i18n.d;

  /**
   * Number Formatting
   */
  n = this._i18n.n;
}
