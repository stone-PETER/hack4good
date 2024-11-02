import csv
import json
import re

def process_problem_statements():
    problems = []
    # Read the CSV file
    with open('ProblemStatements.csv', 'r', encoding='utf-8') as file:
        csv_reader = csv.reader(file)
        next(csv_reader)  # Skip the header row
        for row in csv_reader:
            if not row or row[0].strip() == 'PROBLEM STATEMENTS':
                continue
            sn_no = row[0].strip()
            content = row[1]
            sdg_no = row[2]
            # Split content by '+' to handle multiple problems in a single row
            problem_entries = content.split('+')
            for entry in problem_entries:
                # Extract title and text
                title_and_text = entry.strip().split('\n', 1)
                title = title_and_text[0].strip()
                text = title_and_text[1].strip() if len(title_and_text) > 1 else ""
                problems.append({
                    "no": sn_no,
                    "SDG": sdg_no,
                    "title": title,
                    "text": text
                })
    # Write the JSON structure to a file
    with open('problems.json', 'w', encoding='utf-8') as json_file:
        json.dump(problems, json_file, ensure_ascii=False, indent=4)

if __name__ == "__main__":
    process_problem_statements()