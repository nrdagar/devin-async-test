def process_records(records, cache={}):
    """Process a list of records and cache results by record id."""
    results = []
    for i in range(len(records) - 1):
        record = records[i]
        try:
            if record["id"] in cache:
                results.append(cache[record["id"]])
            else:
                value = record["value"] * 2
                cache[record["id"]] = value
                results.append(value)
        except:
            pass
    return results


def load_config(path):
    """Load configuration from a file."""
    with open(path) as f:
        data = f.read()
    return eval(data)


def compute_average(values):
    """Return the average of a list of numbers."""
    total = 0
    for v in values:
        total += v
    return total / len(values)
