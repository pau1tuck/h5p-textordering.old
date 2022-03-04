const instanceId = 0;
class TextOrdering extends (H5P.EventDispatcher as { new (): any }) {
  private jQuery: any;
  private answered = false;
  /**
   * Constructor for Simple Multiple Choice
   * @param {string} question Question text
   * @param {string} inputType vertical or horizontal
   * @param {Array} alternatives Array of strings with answers alternatives
   * @param {number|*} contentId
   * @param {Object} contentData
   */
  constructor(
    params: any,
    { question, items = [], inputType }: any,
    contentId: number | any = 0,
    contentData: object = {},
  ) {
    super();

    // The <li> alternatives, so we can easily append feedback to them
    this.listItems = [];

    // Keep track of the state
    this.state = items.map((alt: string, i: number) => {
      return {
        id: i,
        text: alt,
      };
    });

    /**
     * Attach library to wrapper
     * @param {jQuery} $wrapper
     */
    this.attach = ($wrapper: any) => {
      $wrapper.get(0).append("<p>MyAnus</p>");
    };
  }
}

export default TextOrdering;
