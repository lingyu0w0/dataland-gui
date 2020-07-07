import {
  BLOCKARG_DATA_MATCH
} from "../constants";

const toolbox = `
    <category name="▦ Data" categorystyle="data_category" id="data_category">
        <block type="data_row_count" id="data_row_count"/>
        <block type="data_get" id="data_get"/>
        <block type="data_select_next" id="data_select_next"/>
        <block type="data_filter" id="data_filter">
            <value name="${BLOCKARG_DATA_MATCH}">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
        </block>
    </category>
`;

export default toolbox;
