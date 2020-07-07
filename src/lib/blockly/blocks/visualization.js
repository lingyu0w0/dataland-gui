import {
  BLOCKARG_VISUALIZATION_COLOR,
  BLOCKARG_VISUALIZATION_COLUMN,
  BLOCKARG_VISUALIZATION_TITLE,
} from "../constants";

function VisualizationBlocks(store) {
  var blocks = {};

  function generate_columns() {
    const state = store.getState();
    if (state.projectDataState.columns.length === 0) {
      return [["Row #", "Row #"]];
    } else {
      return state.projectDataState.columns.map((x) => [x.text, x.text]);
    }
  }

  blocks["visualization_set_title"] = {
    init: function () {
      this.jsonInit({
        message0: "set visualization title to %1",
        args0: [
          {
            type: "field_input",
            name: BLOCKARG_VISUALIZATION_TITLE,
            text: "My plot"
          },
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        style: "visualization_blocks",
      });
    },
  };

  blocks["visualization_clear"] = {
    init: function () {
      this.jsonInit({
        message0: "clear visualization",
        previousStatement: null,
        nextStatement: null,
        style: "visualization_blocks",
      });
    },
  };

  blocks["visualization_set_x"] = {
    init: function () {
      this.jsonInit({
        message0: "set ‘x’ of plot to %1",
        args0: [
          {
            type: "field_dropdown",
            name: BLOCKARG_VISUALIZATION_COLUMN,
            options: generate_columns,
          },
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        style: "visualization_blocks",
      });
    },
  };

  blocks["visualization_set_y"] = {
    init: function () {
      this.jsonInit({
        message0: "set ‘y’ of plot to %1",
        args0: [
          {
            type: "field_dropdown",
            name: BLOCKARG_VISUALIZATION_COLUMN,
            options: generate_columns,
          },
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        style: "visualization_blocks",
      });
    },
  };

  blocks["visualization_set_color_as_static"] = {
    init: function () {
      this.jsonInit({
        message0: "set plotting color to %1",
        args0: [
          {
            type: "input_value",
            name: BLOCKARG_VISUALIZATION_COLOR,
          },
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        style: "visualization_blocks",
      });
    },
  };

  blocks["visualization_set_color_as_var"] = {
    init: function () {
      this.jsonInit({
        message0: "set plotting color to %1",
        args0: [
          {
            type: "field_dropdown",
            name: BLOCKARG_VISUALIZATION_COLUMN,
            options: generate_columns,
          },
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        style: "visualization_blocks",
      });
    },
  };

  return blocks;
}

export default VisualizationBlocks;
