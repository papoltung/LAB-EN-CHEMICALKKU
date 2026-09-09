export function mergeLocationOptions(configuredLocations = [], inventory = []) {
  const inventoryLocations = inventory.map(item => item?.location);
  return [...new Set([...configuredLocations, ...inventoryLocations]
    .map(value => String(value || '').trim())
    .filter(value => value && value !== 'Unknown' && value !== 'None'))]
    .sort((a, b) => a.localeCompare(b, 'th'));
}
