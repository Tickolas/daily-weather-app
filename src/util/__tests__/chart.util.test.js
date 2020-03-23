import { formatForChart } from 'util/chart.util';

describe('ChartUtil', () => {
    describe('formatForChart', () => {
        it('should handle an empty array', () => {
            const result = formatForChart([]);

            expect(result).toEqual({});
        });

        it('should correctly format a set of weather entries', () => {
            const result = formatForChart([
                {
                    time: '2020-03-22T00:00:00+01:00',
                    temperature: -3,
                    type: 'sun'
                },
                {
                    time: '2020-03-22T01:00:00+01:00',
                    temperature: -3.5,
                    type: 'sun'
                }
            ]);

            expect(result).toEqual({ '00:00': -3, '01:00': -3.5 });
        });
    });
});
