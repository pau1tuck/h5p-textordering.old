/* eslint-disable no-console */
H5P.TextOrdering = (($: any, Question: any) => {
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
  const TextOrdering = (
    options: any,
    contentId: number,
    contentData: any,
  ): any => {
    Question.call(this, "text-ordering");
    // Set default behavior.
    $ = $(this);
    const params = Object.assign(
      true,
      {
        taskDescription: "Put the following words in the correct order:",
      },
      options,
    );
    console.log(params);
    console.log($);
  };

  TextOrdering.prototype = Object.create(Question.prototype);
  TextOrdering.prototype.constructor = TextOrdering;

  return TextOrdering;
})(H5P.jQuery, H5P.Question);

export default H5P.TextOrdering;
