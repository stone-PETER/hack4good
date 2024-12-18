import json
def update_json_with_text(file_path_txt, file_path_json):
    # Read lines from the text file
    with open(file_path_txt, 'r') as file:
        lines = [line.strip() for line in file.readlines()]

    # Load the JSON data
    with open(file_path_json, 'r') as file:
        data = json.load(file)

    # Update the Phase1 section
    data['Phase2'] = [{'sno': str(i + 1), 'name': line} for i, line in enumerate(lines)]

    # Write the updated JSON data back to the file
    with open(file_path_json, 'w') as file:
        json.dump(data, file, indent=2)


# Replace 'phase1.txt' and 'data.json' with the paths to your files
update_json_with_text('phase1.txt', 'data.json')