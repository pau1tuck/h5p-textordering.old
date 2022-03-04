class TextOrdering extends (H5P.EventDispatcher as { new (): any }) {
  private jQuery;
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
    { question, listItems = [], inputType }: any,
    contentId = 0,
    contentData = {},
  ) {
    super();

    // The <li> alternatives, so we can easily append feedback to them
    this.listItems = [];

    // Keep track of the state
    this.state = listItems.map((alt: string, i: number) => {
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
      const element = document.createElement("div");
      element.className = "h5p-simple-multiple-choice";
      const questionElement = document.createElement("div");
      questionElement.classList.add("h5p-simple-multiple-choice-question");
      questionElement.classList.add("h5p-subcontent-question");
      const questionText = this.createQuestion(this.uniqueName);
      questionElement.appendChild(questionText);

      element.appendChild(questionElement);

      $wrapper.get(0).appendChild(element);
    };
    /**
     * Create html for multiple choice
     * @return {HTMLElement} html for multiple choice
     */
    this.createQuestion = (id: string): HTMLElement => {
      const questionElement = document.createElement("div");
      questionElement.id = id;
      questionElement.innerHTML = question;
      return questionElement;
    };

    params = $.extend(
      true,
      {
        question: "No question text provided",
        content: {
          blanksText: "",
        },
        behaviour: {
          mode: "typing",
          selectAlternatives: "alternatives",
        },
      },
      params,
    );
    this.jQuery = H5P.jQuery;
    this.contentId = contentId;
  }
}

export default TextOrdering;
