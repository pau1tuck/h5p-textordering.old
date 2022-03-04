/* eslint-disable no-console */
H5P.TextOrdering = ((Question: any, $: any, ConfirmationDialog: any) => {
  /**
   * Initialize module.
   *
   * @class H5P.TextOrdering
   * @extends H5P.Question
   * @param {Object} params // Behavior settings
   * @param {Number} contentId // Content identification
   * @param {Object} contentData // Object containing task-specific content data
   *
   * @returns {Object} TextOrdering instance
   */
  const TextOrdering = (options: any, contentId: number, contentData: any) => {
    Question.call(this);
    // Set default behavior.
    $ = $(this);
    const params = Object.assign(
      true,
      {
        media: {},
        taskDescription: "Set in adjectives in the following sentence",
      },
      options,
    );
    console.log(params);
    console.log($);
  };

  TextOrdering.prototype = Object.create(Question.prototype);
  TextOrdering.prototype.constructor = TextOrdering;

  return TextOrdering;
})(H5P.jQuery, H5P.Question, H5P.ConfirmationDialog);

export default H5P.TextOrdering;
