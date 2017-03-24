'use strict';

const MetricsAggregation = require('./metrics-aggregation');

const ES_REF_URL = 'https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-metrics-valuecount-aggregation.html';

/**
 * A single-value metrics aggregation that counts the number of values that
 * are extracted from the aggregated documents. These values can be extracted
 * either from specific fields in the documents, or be generated by a provided
 * script. Typically, this aggregator will be used in conjunction with other
 * single-value aggregations.
 *
 * [Elasticsearch reference](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-metrics-valuecount-aggregation.html)
 *
 * Aggregation that counts the number of values that are extracted from the
 * aggregated documents.
 *
 * @extends MetricsAggregation
 */
class ValueCountAggregation extends MetricsAggregation {

    /**
     * Creates an instance of ValueCountAggregation
     *
     * @param {string} name The name which will be used to refer to this aggregation.
     * @param {string=} field The field to aggregate on
     * @returns {ValueCountAggregation} returns `this` so that calls can be chained
     */
    constructor(name, field) {
        super(name, 'value_count', field);
        return this;
    }

    /**
     * @override
     * @throws {Error} This method cannot be called on TopHitsAggregation
     */
    missing() {
        console.log(`Please refer ${ES_REF_URL}`);
        throw new Error('missing is not supported in TopHitsAggregation');
    }
}

module.exports = ValueCountAggregation;
