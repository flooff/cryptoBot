const formatTimestamp = (timestamp) => {
    return new Date(parseInt(timestamp) * 1000).toISOString();
  };
  
  const formatValue = (value) => {
    return parseFloat(value) / Math.pow(10, 18);  // Convert in token unit (ex: compound)
  };
  
  module.exports = { formatTimestamp, formatValue };
  