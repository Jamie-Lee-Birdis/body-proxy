const filterFlyouts = [
  [
    {id: 'review_type_all', label: 'All', name: 'review_type', type: 'radio', value: 'all', onChange: () => {} },
    {id: 'review_type_positive', label: 'Positive', name: 'review_type', type: 'radio', value: 'positive', onChange: () => {} },
    {id: 'review_type_negative', label: 'Negative', name: 'review_type', type: 'radio', value: 'negative', onChange: () => {} },
  ], [
    {id: 'purchase_type_all', label: 'All', name: 'purchase_type', type: 'radio', value: 'all', onChange: () => {} },
    {id: 'purchase_type_steam', label: 'Steam Purchasers', name: 'purchase_type', type: 'radio', value: 'steam', onChange: () => {} },
    {id: 'purchase_type_non_steam', label: 'Other', name: 'purchase_type', type: 'radio', value: 'non_steam_purchase', onChange: () => {} }
  ], [
    {id: 'review_language_all', label: 'All Languages', name: 'review_language', type: 'radio', value: 'all', onChange: () => {} },
    {id: 'review_language_mine', label: 'Your Languages', name: 'review_language', type: 'radio', value: 'english', onChange: () => {} },
    {id: 'shoes', component: 'CustomizeLanguageBtn' }
  ], [
    {id: 'hat', component: 'DateRangeHat' },
    {id: 'review_date_range_all', label: 'Lifetime', name: 'review_date_range', type: 'radio', value: 'all', onChange: () => {} },
    {id: 'review_date_range_histogram', label: 'Only Specific Range (Select on graph above)', name: 'review_date_range', type: 'radio', value: 'include', onChange: () => {} },
    {id: 'review_date_range_exclude_histogram', label: 'Exclude Specific Range (Select on graph above)', name: 'review_date_range', type: 'radio', value: 'exclude', onChange: () => {} }
  ], [
    {id: 'hat', component: 'PlaytimeHat' },
    {id: 'review_playtime_preset_0', label: 'No Minimum', name: 'review_playtime_preset', type: 'radio', value: '0', onChange: () => {} },
    {id: 'review_playtime_preset_1', label: 'Over 1 hour', name: 'review_playtime_preset', type: 'radio', value: '1', onChange: () => {} },
    {id: 'review_playtime_range', label: 'No minimum to No maximum', name: 'review_playtime_preset', type: 'range', value: '0-0-100', onChange: () => {} }
  ]
];

export default filterFlyouts;
