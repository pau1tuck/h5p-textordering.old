const instanceId = 0;
export default class TextOrdering extends H5P.EventDispatcher {
  /**
   * @constructor
   *
   * @param {object} params Parameters passed by the editor.
   * @param {number} contentId Content's id.
   * @param {object} [extras] Saved state, metadata, etc.
   */
  constructor(
    params: any,
    // { question, items = [], inputType }: any,
    contentId: string | null = null,
    extras = [],
  ) {
    super();

    // The <li> alternatives, so we can easily append feedback to them
    this.listItems = [];

    this.element = document.createElement("div");
    this.element.innertext = params.question;

    /**
     * Attach library to wrapper
     * @param {jQuery} $wrapper
     */
    this.attach = ($wrapper: JQuery): void => {
      $wrapper.get(0)?.append("<p>FUCK SAKE!</p>");
    };
  }
}
